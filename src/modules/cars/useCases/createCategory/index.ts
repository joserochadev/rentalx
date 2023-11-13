import { CategoriesRepository } from '../../repositories/categoriesRepository'
import { CreateCategoryService } from '../../services/createCategoryService'
import { CreateCategoryController } from './CreateCategoryController'

const categoryRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(categoryRepository)
const createCategoryController = new CreateCategoryController(
	createCategoryService,
)

export { createCategoryController }
