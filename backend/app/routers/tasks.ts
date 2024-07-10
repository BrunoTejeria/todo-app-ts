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
    this.router.put("/:id/state", this.updateState);
    this.router.delete("/:id/delete", this.deleteTask);
  }

  private getAllTasks = async (req: Request, res: Response) => {
      try {
        const tasks = await TasksService.getAll();
        res.status(200).json({
          message: "Tasks retrieved successfully",
          content: tasks
        });
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private getState = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const state = await TasksService.getState(id);
      if (!state) {
        return res.status(404).json({
          message: "Task not found",
          content: null
        });
      }
      return res.status(200).json({
        message: "Tasks state retrieved successfully",
        content: state
      })
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private getText = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const text = await TasksService.getText(id);
      if (!text) {
        return res.status(404).json({
          message: "Task not found",
          content: null
        });
      }
      return res.status(200).json({
        message: "Tasks text retrieved successfully",
        content: text
      })
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private createTask = async (req: Request, res: Response) => {
    try {
      const { text } = req.query;
      if (!text) {
        return res.status(400).json({ message: "Text is required" });
      }

      const task = await TasksService.createTask(text as string);
      if (!task) {
        return res.status(500).json({ message: "Failed to create task" });
      }
      return res.status(200).json({
        message: "Task created successfully",
        content: task
      });
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private updateState = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { status } = req.query;

      const updatedTask = await TasksService.updateState(id as string, status as "pending" | "done");
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(200).json({
        message: "Task updated successfully",
        content: updatedTask
      });
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private deleteTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedTask = await TasksService.deleteTask(id as string);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(200).json({
        message: "Task deleted successfully",
        content: deletedTask
      });
    }
    catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new TasksRouter().router;