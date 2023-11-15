import { Request, Response } from 'express'
import { ListCategoriesService } from '../../services/listCategoriesSevice'

class ListCategoriesController {
	constructor(private listCategoriesService: ListCategoriesService) {}

	handle(request: Request, response: Response): Response {
		const allCategories = this.listCategoriesService.execute()

		return response.json(allCategories)
	}
}

export { ListCategoriesController }
