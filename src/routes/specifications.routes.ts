import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/createSpecificationService'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationRepository()

specificationsRoutes.post('/', (request, response) => {
	const { name, description } = request.body

	new CreateSpecificationService(specificationsRepository).execute({
		name,
		description,
	})

	return response.status(201).send()
})

export { specificationsRoutes }
