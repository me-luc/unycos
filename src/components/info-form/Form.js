import styled from "styled-components";

export default function Form() {
	function submit(e) {
		e.preventDefault();
	}
	return (
		<Page onSubmit={submit}>
			<StyledInput type="name" placeholder="Nombre completo" name="" />
			<StyledInput
				type="email"
				placeholder="Correo electrónico"
				name=""
			/>
			<StyledInput
				type="country"
				placeholder="País / Código país"
				name=""
			/>
			<StyledInput type="" placeholder="TeLéfono" name="" />

			<div className="checkbox">
				<StyledInput
					type="checkbox"
					name="conditions"
					placeholder="TeLéfono"
				/>
				<label for="conditions">
					Acepto las <span> condiciones de uso </span> y{" "}
					<span> protección de datos</span>.
				</label>
			</div>

			<div className="checkbox">
				<StyledInput
					type="checkbox"
					name="new-courses"
					placeholder="TeLéfono"
				/>
				<label for="new-courses">
					Me gustaría recibir información sobre nuevos cursos, ofertas
					y promociones
				</label>
			</div>
			<div className="button-box">
				<StyledButton type="submit">Enviar</StyledButton>
			</div>
		</Page>
	);
}

const Page = styled.form`
	width: 780px;
	flex-wrap: wrap;
	display: flex;

	.button-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.checkbox {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 370px;
		margin: 7px;

		[type="checkbox"] {
			cursor: pointer;
			width: 25px;
			height: 25px;
			background: #ffffff;
			border: 1px solid #eaeaea;
			box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
			border-radius: 6px;
			-webkit-appearance: none;
		}
		[type="checkbox"]:checked {
			background-color: #c5af19;
		}

		label {
			overflow: hidden;
			font-family: "Lato";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			color: #858479;

			span {
				color: #fff;
			}
		}
	}
`;

const StyledButton = styled.button`
	width: 370px;
	height: 40px;
	background: #c5af19;
	border-radius: 4px;
	border: none;

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px 0;
	cursor: pointer;
`;

const StyledInput = styled.input`
	background: #ffffff;
	box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
	border-radius: 4px;
	box-sizing: border-box;
	padding-left: 20px;
	width: 370px;
	height: 40px;

	font-family: "Lato";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 20px;
	text-transform: uppercase;
	color: #a1a097;
	border: none;
	margin: 7px;
`;
