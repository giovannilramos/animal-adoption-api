import { v4 as uuidv4 } from 'uuid';
import { ContextRequestDto } from '../Dto/ContextRequestDto';
import asyncHooks from 'async_hooks';

const storeContext = new Map();
asyncHooks
  .createHook({
    init: (asyncId: number, _: string, triggerAsyncId: number) => {
      if (storeContext.has(triggerAsyncId)) {
        storeContext.set(asyncId, storeContext.get(triggerAsyncId));
      }
    },
    destroy: (asyncId: number) => {
      if (storeContext.has(asyncId)) {
        storeContext.delete(asyncId);
      }
    },
  })
  .enable();

export default class ContextRequestHelper {
  public static setContextRequest(contextRequestDto: ContextRequestDto): void {
    const requestInfo = {
      requestId: contextRequestDto.requestId || uuidv4(),
      userId: contextRequestDto.userId,
      startTime: contextRequestDto.startTime || null,
    };
    storeContext.set(asyncHooks.executionAsyncId(), requestInfo);
  }

  public static async getContextRequest(): Promise<ContextRequestDto> {
    const contextRequestDto = storeContext.get(asyncHooks.executionAsyncId());
    if (contextRequestDto) {
      return contextRequestDto;
    }

    return {
      requestId: null,
      userId: null,
      startTime: null,
    };
  }
}
