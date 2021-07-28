import { Request, Response } from 'express';

export interface ControllerRead {
    getList(req: Request, res: Response): void;
    getById(req: Request, res: Response): void;
}
