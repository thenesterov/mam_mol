declare namespace $ {

	type $mol_string__value__DQGXWG7M = $mol_type_enforce<
		ReturnType< $mol_link_iconed_demo['uri'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_link_iconed__uri__TIK5SD2L = $mol_type_enforce<
		ReturnType< $mol_link_iconed_demo['uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_list__rows__SYEZ0Z4X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_link_iconed_demo extends $mol_example_small {
		uri( next?: string ): string
		Input( ): $mol_string
		Output( ): $mol_link_iconed
		Blocks( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map