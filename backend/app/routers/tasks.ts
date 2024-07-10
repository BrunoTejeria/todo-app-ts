import { Router } from 'express';
import { Request, Response } from 'express';

import TasksService from '../services/tasks';


class TasksRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get("/", this.getAllTasks);
    this.router.get("/:id/state", this.getState);
    this.router.get("/:id/text", this.getText);
    this.router.post("/create", this.createTask);
    this.router.put("/:id/update", this.updateTask);
    this.router.delete("/:id/delete", this.deleteTask);
  }

  private getAllTasks = async (req: Request, res: Response) => {
      try {
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private getState = async (req: Request, res: Response) => {
    try {
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private getText = async (req: Request, res: Response) => {
    try {
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private createTask = async (req: Request, res: Response) => {
    try {
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private updateTask = async (req: Request, res: Response) => {
    try {
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private deleteTask = async (req: Request, res: Response) => {
    try {
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

}

export default new TasksRouter().router;