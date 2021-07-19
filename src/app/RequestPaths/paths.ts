import { environment } from 'src/environments/environment'

export default {
	company: {
		get_all: environment.apiUrl + '/v1/company/findAll'		
	},
	application: {
		employeeCredencials: environment.apiUrl + '/v1/employee/specificEmployee'
	},
	orders: {
		validateEmployeeOrder: environment.apiUrl + '/v1/employee/validateEmployeeOrder',
		getEmployeeOrder: environment.apiUrl + '/v1/employee/getEmployeeOrder',
		getConfigurationOrders: environment.apiUrl + '',
		saveEmployeeOrder: environment.apiUrl + ''
	},
	productDetails: {
		getPantsSizes: environment.apiUrl + '',
		getRelationShirtPant: environment.apiUrl + '',
		getShirtsSizes: environment.apiUrl + '',
		getProductCaracteristics: environment.apiUrl + '',
		getNeckPantRelation: environment.apiUrl + ''

	}
}