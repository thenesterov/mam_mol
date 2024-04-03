declare namespace $ {

	type $mol_button_major__title__5X3H6BWH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click__MH90CION = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__title__91DBSLXL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__enabled__14B4AFFJ = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_minor__title__KCXZ4SFO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__5UY63KNM = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title__2IE99L2W = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__enabled__YU5RLQNM = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__P4E68SGF = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__KTNRRGYL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click__IKB1T682 = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__AN4OPC9K = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_button_demo extends $mol_example_small {
		fail( next?: any ): any
		Major_enabled( ): $mol_button_major
		Major_disabled( ): $mol_button_major
		Minor_enabled( ): $mol_button_minor
		Minor_disabled( ): $mol_button_minor
		Minor_icon_only_icon( ): $mol_icon_cursor_default_click_outline
		Minor_icon_only( ): $mol_button_minor
		Minor_iconed_icon( ): $mol_icon_cursor_default_click_outline
		Minor_iconed( ): $mol_button_minor
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map