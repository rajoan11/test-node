export interface AuthenticationResponse {
    user: { id: string; email: string };
    token: string;
}
