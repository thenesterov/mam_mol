namespace $ {
	export class $mol_theme_demo extends $mol_example_large {
		
		/**
		 * ```tree
		 * style * --mol_theme_hue <= hue_deg
		 * ```
		 */
		style() {
			return {
				"--mol_theme_hue": this.hue_deg()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Hue
		 * 	<= Scroll
		 * ```
		 */
		sub() {
			return [
				this.Hue(),
				this.Scroll()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\theme
		 * 	\skin
		 * ```
		 */
		tags() {
			return [
				"theme",
				"skin"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects / \Type/Color
		 * ```
		 */
		aspects() {
			return [
				"Type/Color"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * hue_deg \
		 * ```
		 */
		hue_deg() {
			return ""
		}
		
		/**
		 * ```tree
		 * hue? 240
		 * ```
		 */
		@ $mol_mem
		hue(next?: any) {
			if ( next !== undefined ) return next as never
			return 240
		}
		
		/**
		 * ```tree
		 * Hue $mol_number
		 * 	value? <=> hue?
		 * 	precision_change 15
		 * ```
		 */
		@ $mol_mem
		Hue() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.hue(next)
			obj.precision_change = () => 15
			
			return obj
		}
		
		/**
		 * ```tree
		 * Case_dark $mol_theme_demo_cases theme \$mol_theme_dark
		 * ```
		 */
		@ $mol_mem
		Case_dark() {
			const obj = new this.$.$mol_theme_demo_cases()
			
			obj.theme = () => "$mol_theme_dark"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Case_light $mol_theme_demo_cases theme \$mol_theme_light
		 * ```
		 */
		@ $mol_mem
		Case_light() {
			const obj = new this.$.$mol_theme_demo_cases()
			
			obj.theme = () => "$mol_theme_light"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cases $mol_list rows /
		 * 	<= Case_dark
		 * 	<= Case_light
		 * ```
		 */
		@ $mol_mem
		Cases() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Case_dark(),
				this.Case_light()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Scroll $mol_scroll sub / <= Cases
		 * ```
		 */
		@ $mol_mem
		Scroll() {
			const obj = new this.$.$mol_scroll()
			
			obj.sub = () => [
				this.Cases()
			] as readonly any[]
			
			return obj
		}
	}
	
	export class $mol_theme_demo_cases extends $mol_row {
		
		/**
		 * ```tree
		 * sub / <= Default
		 * ```
		 */
		sub() {
			return [
				this.Default()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * theme \
		 * ```
		 */
		theme() {
			return ""
		}
		
		/**
		 * ```tree
		 * Base $mol_theme_demo_case theme \$mol_theme_base
		 * ```
		 */
		@ $mol_mem
		Base() {
			const obj = new this.$.$mol_theme_demo_case()
			
			obj.theme = () => "$mol_theme_base"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Accent $mol_theme_demo_case theme \$mol_theme_accent
		 * ```
		 */
		@ $mol_mem
		Accent() {
			const obj = new this.$.$mol_theme_demo_case()
			
			obj.theme = () => "$mol_theme_accent"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Current $mol_theme_demo_case theme \$mol_theme_current
		 * ```
		 */
		@ $mol_mem
		Current() {
			const obj = new this.$.$mol_theme_demo_case()
			
			obj.theme = () => "$mol_theme_current"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Special $mol_theme_demo_case theme \$mol_theme_special
		 * ```
		 */
		@ $mol_mem
		Special() {
			const obj = new this.$.$mol_theme_demo_case()
			
			obj.theme = () => "$mol_theme_special"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Default $mol_theme_demo_case
		 * 	title <= theme
		 * 	inner /
		 * 		<= Base
		 * 		<= Accent
		 * 		<= Current
		 * 		<= Special
		 * ```
		 */
		@ $mol_mem
		Default() {
			const obj = new this.$.$mol_theme_demo_case()
			
			obj.title = () => this.theme()
			obj.inner = () => [
				this.Base(),
				this.Accent(),
				this.Current(),
				this.Special()
			] as readonly any[]
			
			return obj
		}
	}
	
	export class $mol_theme_demo_case extends $mol_scroll {
		
		/**
		 * ```tree
		 * title <= theme
		 * ```
		 */
		title() {
			return this.theme()
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Self
		 * 	^ inner
		 * ```
		 */
		sub() {
			return [
				this.Self(),
				...this.inner()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * inner /
		 * ```
		 */
		inner() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Placeholder null
		 * ```
		 */
		Placeholder() {
			return null as any
		}
		
		/**
		 * ```tree
		 * theme \
		 * ```
		 */
		theme() {
			return ""
		}
		
		/**
		 * ```tree
		 * theme_code <= title
		 * ```
		 */
		theme_code() {
			return this.title()
		}
		
		/**
		 * ```tree
		 * Card2_text $mol_button_copy title <= theme_code
		 * ```
		 */
		@ $mol_mem
		Card2_text() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => this.theme_code()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Card2 $mol_row sub / <= Card2_text
		 * ```
		 */
		@ $mol_mem
		Card2() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Card2_text()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Card1_text $mol_button_copy title \	$mol_theme.card
		 * ```
		 */
		@ $mol_mem
		Card1_text() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "\t$mol_theme.card"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Card1 $mol_list rows /
		 * 	<= Card2
		 * 	<= Card1_text
		 * ```
		 */
		@ $mol_mem
		Card1() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Card2(),
				this.Card1_text()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Back $mol_button_copy title \$mol_theme.back
		 * ```
		 */
		@ $mol_mem
		Back() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.back"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Line $mol_button_copy title \$mol_theme.line
		 * ```
		 */
		@ $mol_mem
		Line() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.line"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Text $mol_button_copy title \$mol_theme.text
		 * ```
		 */
		@ $mol_mem
		Text() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.text"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Field $mol_button_copy title \$mol_theme.field
		 * ```
		 */
		@ $mol_mem
		Field() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.field"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Shade $mol_button_copy title \$mol_theme.shade
		 * ```
		 */
		@ $mol_mem
		Shade() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.shade"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Focus $mol_button_copy title \$mol_theme.focus
		 * ```
		 */
		@ $mol_mem
		Focus() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.focus"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Control $mol_button_copy title \$mol_theme.control
		 * ```
		 */
		@ $mol_mem
		Control() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.control"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Hover $mol_button_copy title \$mol_theme.hover
		 * ```
		 */
		@ $mol_mem
		Hover() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.hover"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Current $mol_button_copy title \$mol_theme.curent
		 * ```
		 */
		@ $mol_mem
		Current() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.curent"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Special $mol_button_copy title \$mol_theme.special
		 * ```
		 */
		@ $mol_mem
		Special() {
			const obj = new this.$.$mol_button_copy()
			
			obj.title = () => "$mol_theme.special"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Self $mol_list rows /
		 * 	<= Card1
		 * 	<= Back
		 * 	<= Line
		 * 	<= Text
		 * 	<= Field
		 * 	<= Shade
		 * 	<= Focus
		 * 	<= Control
		 * 	<= Hover
		 * 	<= Current
		 * 	<= Special
		 * ```
		 */
		@ $mol_mem
		Self() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Card1(),
				this.Back(),
				this.Line(),
				this.Text(),
				this.Field(),
				this.Shade(),
				this.Focus(),
				this.Control(),
				this.Hover(),
				this.Current(),
				this.Special()
			] as readonly any[]
			
			return obj
		}
	}
	
}

