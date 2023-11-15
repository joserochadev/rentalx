import { CategoriesRepository } from '../../repositories/categoriesRepository'
import { ListCategoriesService } from '../../services/listCategoriesSevice'
import { ListCategoriesController } from './ListCategoriesController'

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesSevice = new ListCategoriesService(categoriesRepository)
const listCategoriesController = new ListCategoriesController(
	listCategoriesSevice,
)

export { listCategoriesController }
