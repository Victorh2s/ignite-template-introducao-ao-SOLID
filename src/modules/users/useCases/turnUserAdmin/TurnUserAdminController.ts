import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
  
      const turnUserAdmin = this.turnUserAdminUseCase.execute({user_id: String(user_id)})
      return response.status(201).json(turnUserAdmin)
    } catch (error) {
      return response.status(404).json({error: error.message})
    }
  }
}

export { TurnUserAdminController };
