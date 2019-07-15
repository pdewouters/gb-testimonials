const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck
} = wp.editor;

const {
	TextControl,
	PanelBody,
	PanelRow,
	IconButton
} = wp.components;

registerBlockType( 'hm/gb-testimonials', {
	title: 'Testimonials',
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: '.testimonial-text'
		},
		author: {
			type: 'string',
		},
		source: {
			type: 'string',
		},
		cite: {
			type: 'string',
		},
		testimonialImg: {
			type: "string",
			source: "attribute",
			selector: ".testimonial-img",
			attribute: "src",
		}
	},
	edit: props =>  {
		const {
			attributes: {
				content,
				author,
				source,
				cite,
				testimonialImg
			},
			setAttributes,
			className,
		} = props;
		const onChangeContent = content => props.setAttributes( { content } )
		const onChangeAuthor = author => props.setAttributes( { author } )
		const onChangeSource = source => props.setAttributes( { source } )
		const onChangeCite = cite => props.setAttributes( { cite } )
		const onChangeImage = imgObj => {
			console.log(imgObj)
			setAttributes({ testimonialImg: imgObj.sizes.thumbnail.url })
		}
		//console.info(props);
		return (
			<div className={ props.className }>
				<InspectorControls>
					<PanelBody
						title="Blockquote settings"
					>
						<PanelRow>
							<TextControl
								className="gb-testimonial-author"
								label="Author"
								value={ author }
								onChange={ onChangeAuthor }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="gb-testimonial-source"
								label="Source"
								value={ source }
								onChange={ onChangeSource }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="gb-testimonial-cite"
								label="Source URL"
								value={ cite }
								onChange={ onChangeCite }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<figure>
					<img src={testimonialImg} alt="img" />
					<MediaUploadCheck>
						<MediaUpload
							className="testimonial-img"
							onSelect={ onChangeImage }
							allowedTypes={ 'image' }
							value={ testimonialImg }
							render={ ( { open } ) => (
								<IconButton
									className="testimonial-logo__button"
									onClick={open}
									icon="format-image"
									showTooltip="true"
									label="Change image."
								/>
							) }
						/>
					</MediaUploadCheck>
				</figure>

				<blockquote cite={cite}>
					<RichText
						className="testimonial-text"
						tagName="p"
						onChange={ onChangeContent }
						value={ content }
					/>
					<footer>—{ author }, <cite>{ source }</cite></footer>
				</blockquote>
			</div>
		);
	},
	save: props =>  {
		console.info(props);
		const {
			attributes: {
				content,
				author,
				source,
				cite,
				testimonialImg
			},
			className,
		} = props;
		return (
			<div className={ className }>
				<figure className="testimonial-img">
					<img src={testimonialImg} alt="img" />
				</figure>
				<blockquote cite={cite}>
					<RichText.Content
						className="testimonial-text"
						tagName="p"
						value={ content }
					/>
					<footer>—{ author }, <cite>{ source }</cite></footer>
				</blockquote>
			</div>
		);
	},
} );
