declare namespace $ {

	type $mol_check_expand__checked__39DPZ7HE = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['base_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__title__JU48MLDB = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['c1Label'] >
		,
		ReturnType< $mol_check_expand['title'] >
	>
	type $mol_check_expand__title__3VENH5IB = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['c2Label'] >
		,
		ReturnType< $mol_check_expand['title'] >
	>
	type $mol_check_expand__checked__HQV4FEZ5 = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['expanded_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__title__TALOA7YC = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['c5Label'] >
		,
		ReturnType< $mol_check_expand['title'] >
	>
	type $mol_check_expand__disabled__849EBP2Y = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_expand['disabled'] >
	>
	type $mol_check_expand__checked__UAH588R7 = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['base_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__checked__F7644665 = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['expanded_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_list__rows__RYJIDG7E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_check_expand_demo extends $mol_example_small {
		base_expanded( next?: boolean ): boolean
		c1Label( ): string
		Labeled_base( ): $mol_check_expand
		c2Label( ): string
		expanded_expanded( next?: boolean ): boolean
		Labeled_expanded( ): $mol_check_expand
		c5Label( ): string
		Disabled( ): $mol_check_expand
		Empty_base( ): $mol_check_expand
		Empty_expanded( ): $mol_check_expand
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map