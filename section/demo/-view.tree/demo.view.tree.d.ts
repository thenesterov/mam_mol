declare namespace $ {

	type $mol_section__title__K08R1DQD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__5WAD1LIX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	export class $mol_section_demo extends $mol_example_small {
		Section_content( ): $mol_filler
		Section( ): $mol_section
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map