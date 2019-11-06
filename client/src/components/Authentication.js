import React from 'react';

class Register extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
						name: '',
						password: '',
						email: '',
						zip: ''
				};
		}

		handleChange(val) {
				this.setState({{val.target.name}: val.target.val})
		}

		handleSubmit(val) {
		}


		render() {
				return (
						<div>
							<form onSubmit={this.handleSubmit}>
								<label>
									Name:
									<input name="name" value={this.state.name} onChange={val => this.handleChange(val)} />
								</label>
								<label>
									Password:
									<input name="password" value={this.state.password} onChange={val => this.handleChange(val)} />
								</label>
								<label>
									Email:
									<input name="email" value={this.state.email} onChange={val => this.handleChange(val)} />
								</label>
								<label>
									Zip Code:
									<input name="zip" value={this.state.zip} onChange={val => this.handleChange(val)} />
								</label>
							</form>
						</div>
				)
		}
}
