declare namespace $ {

	type $mol_row__sub__1149BHPC = $mol_type_enforce<
		ReturnType< $mol_row_demo_products['products'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_card__minimal_width__OA5QMNQ2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_card['minimal_width'] >
	>
	type $mol_card__minimal_height__NQC0EMIV = $mol_type_enforce<
		number
		,
		ReturnType< $mol_card['minimal_height'] >
	>
	type $mol_card__title__WRUQESTR = $mol_type_enforce<
		ReturnType< $mol_row_demo_products['product_title'] >
		,
		ReturnType< $mol_card['title'] >
	>
	export class $mol_row_demo_products extends $mol_example {
		product_title( id: any): string
		products( ): readonly(any)[]
		Products( ): $mol_row
		title( ): string
		count( ): number
		Product( id: any): $mol_card
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=products.view.tree.d.ts.map