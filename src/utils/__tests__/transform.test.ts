/** @format */

import { ISchema } from '@formily/antd'
/** @format */

import { DraggableToFormily, FormilyToDraggable } from '../transform'

it('Sortable list data transform to formily schema', () => {
	const obj: ISchema = {
		type: 'object',
		properties: {
			key: {
				type: 'string'
			},
			key1: {
				type: 'object',
				properties: {
					key2: {
						type: 'array',
						items: [
							{
								type: 'object',
								properties: {
									key3: {
										type: 'string'
									}
								}
							},
							{
								type: 'object',
								properties: {
									key4: {
										type: 'string'
									}
								}
							}
						]
					}
				}
			}
		}
	}

	const arr = [
		{
			id: 'schema',
			type: 'object',
			properties: [
				{
					id: 'key',
					type: 'string'
				},
				{
					id: 'key1',
					type: 'object',
					properties: [
						{
							id: 'key2',
							type: 'array',
							items: [
								{
									type: 'object',
									id: 'schema',
									properties: [
										{
											id: 'key3',
											type: 'string'
										}
									]
								},
								{
									type: 'object',
									id: 'schema',
									properties: [
										{
											id: 'key4',
											type: 'string'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]

	expect(
		DraggableToFormily([
			{
				title: 'task 3',
				id: 2,
				properties: [
					{
						title: 'task 4',
						properties: [],
						id: 3
					}
				]
			}
		])
	).toEqual({
		title: 'task 3',
		properties: { '3': { properties: {}, title: 'task 4' } }
	})

	expect(FormilyToDraggable(obj)).toEqual(arr)

	expect(DraggableToFormily(arr)).toEqual(obj)
})
