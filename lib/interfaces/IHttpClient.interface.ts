export default interface IHttpClient {
   readonly base_url: string;
   readonly instance: unknown;
   get(url: string, config?: unknown): Promise<unknown>;
   post(url: string, data: unknown, config?: unknown): Promise<unknown>;
   put?(url: string, data: unknown, config?: unknown): Promise<unknown>;
}
