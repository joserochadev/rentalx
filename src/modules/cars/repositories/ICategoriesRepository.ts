import { Category } from '../model/Category'

interface ICreateRepositoryDTO {
	name: string
	description: string
}

interface ICategoriesRepository {
	create({ name, description }: ICreateRepositoryDTO): void
	list(): Category[]
	findByName(name: string): Category | undefined
}

export { ICategoriesRepository, ICreateRepositoryDTO }
