declare namespace $ {

	type $mol_link_source__uri__DM78MY3Z = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['source_link'] >
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_link_source__hint__IY8GWYV8 = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['source_hint'] >
		,
		ReturnType< $mol_link_source['hint'] >
	>
	type $mol_button_minor__hint__Y7L52994 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__9GBAAE3U = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click__4P85H5GY = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_text__text__LHN28XNB = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['readme'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__uri_base__8RS6ALS4 = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['uri_base'] >
		,
		ReturnType< $mol_text['uri_base'] >
	>
	type $mol_view__sub__XFPIYD9C = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_app_demo_readme extends $mol_page {
		source_link( ): string
		source_hint( ): string
		Source_link( ): $mol_link_source
		Close_icon( ): $mol_icon_cross
		close( next?: any ): any
		Close( ): $mol_button_minor
		readme( ): string
		uri_base( next?: string ): string
		Not_found_caption( ): string
		readme_link_template( ): string
		source_link_template( ): string
		repo( ): string
		module( ): readonly(string)[]
		title( ): string
		opened( next?: boolean ): boolean
		tools( ): readonly(any)[]
		Readme( ): $mol_text
		Not_found( ): $mol_view
	}
	
}

//# sourceMappingURL=readme.view.tree.d.ts.map