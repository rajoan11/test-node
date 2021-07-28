import { Request, Response } from 'express';

export interface ControllerWrite {
    create(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
}
