export default class AuthDto {
    constructor(props) {
        this.email = props.email || '';
        this.password = props.password || '';
        this.token = props.token || null;
        this.tokenType = props.tokenType || null;
        this.tokenExpiresIn = props.tokenExpiresIn || null;
    }

    public email: string;
    public password: string;
    public token?: string;
    public tokenType?: string;
    public tokenExpiresIn?: number;
}
