# Aether Model Card Demo

This project provides a web-based form for creating standardized **Aether Model Cards** - comprehensive documentation for AI/ML models that ensures transparency, accountability, and reproducibility in model development and deployment.

## Why Fill Out This Form?

Model cards are essential documentation that provide critical information about AI/ML models, including their intended use, performance characteristics, limitations, and ethical considerations. The Aether Model Card standard extends traditional model cards with enhanced fields for:

- **Technical Specifications**: Detailed architecture, training parameters, and inference requirements
- **Evaluation Metrics**: Comprehensive performance data with confidence intervals and decision thresholds
- **Security & Risk Assessment**: Risk identification and mitigation strategies
- **Deployment Constraints**: Hardware, software, and environmental requirements
- **Governance & Ownership**: Clear accountability and contact information

By completing this form, you create a standardized JSON document that can be:
- Shared with stakeholders for model approval and deployment decisions
- Used for regulatory compliance and audit trails
- Integrated into MLOps pipelines for automated model governance
- Referenced for model comparison and selection processes

## Early Evaluation Program

This demo application is being used to gather feedback and validate the Aether Model Card schema through early evaluations with:

- **ML Engineers & Data Scientists**: Testing the form's usability and completeness for documenting real-world models
- **Model Governance Teams**: Evaluating the schema's effectiveness for compliance and risk management
- **Deployment Engineers**: Assessing whether the technical specifications provide sufficient deployment guidance
- **Security Teams**: Validating the risk assessment and security documentation sections

### How Your Input Helps

When you fill out and download a model card:
- The form structure is tested for completeness and ease of use
- Field definitions are validated against real model documentation needs
- The generated JSON schema is evaluated for integration with existing MLOps tools
- User experience feedback helps refine the interface and workflow

Your participation helps improve the Aether Model Card standard and ensures it meets the practical needs of the AI/ML community.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MLOps-OpenAPI/model-card-demo.git
cd model-card-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Using the Form

1. **Fill out the model information**: Complete the form sections with details about your AI/ML model
2. **Download the JSON**: Click "Download Model Card as JSON" to generate a standardized model card file
3. **Share and integrate**: Use the generated JSON file in your MLOps workflows, compliance processes, or model registries

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Schema Information

The form generates JSON files that conform to the Aether Model Card schema, which includes the following main sections:

- **Identity & Basic Information**: Model name, type, version, and overview
- **Source & Distribution**: Training/evaluation data and model origin
- **Ownership & Governance**: Model owners and contact information
- **Technical Specifications**: Architecture, parameters, and inference requirements
- **Evaluation & Performance**: Metrics, benchmarks, and evaluation infrastructure
- **Limitations & Constraints**: Known limitations and performance tradeoffs
- **Security & Compliance**: Risk assessment and mitigation strategies

## Contributing

We welcome feedback and contributions to improve the Aether Model Card standard and this demo application. Please feel free to:

- Report issues or suggest improvements
- Submit pull requests with enhancements
- Share your experience using the form with real models
- Provide feedback on the schema completeness and usability

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
