# S^2 + B^2 (Sustainability Squared, Behavior Balanced)

## Description

Project  S^2+B^2 (Sustainability Squared, Behavior Balanced) by Team SIRIUS successfully addresses the critical challenge of bridging the gap between sustainability innovation and investment. This innovative platform empowers both visionary innovators and discerning investors to work collaboratively towards a greener future.

**Key Achievements:**

- Developed a user-friendly platform using React for efficient project matchmaking.
- Implemented a powerful NLP-powered ML model to accurately evaluate the transformative potential and environmental impact of proposed sustainability projects.
- Leveraged cutting-edge technologies like Kubernetes and Kepler to monitor and minimize the project's own carbon footprint.

**Impact and Future Potential:**
  
 S^2+B^2 goes beyond simply connecting innovators and investors. It fosters environmental awareness, promotes climate change mitigation strategies, and paves the way for transformative policy and corporate responsibility initiatives. The future holds immense potential for the platform to:
Integrate with district heating systems, utilizing waste heat from data centers for residential and commercial use.
Establish a network of solar power projects to further reduce the platform's environmental impact.
Expand the platform's reach to connect a wider range of stakeholders committed to sustainability.


## Setup

Clone this repo:

```bash
git clone https://github.com/cnu1812/s2b2.git
```

Open the app folder and install dependecies:

```bash
cd s2b2 && npm install
```

Run the development server:

```bash
npm run dev
```

## Built wih

- [React](https://react.dev/learn)
- [Vite](https://vitejs.dev/guide/)
- [Tailwind](https://react.dev/learn)
- [Shadcn/ui](https://ui.shadcn.com/docs)

## Deployment

- Used Kubernetes to deploy the application. The reason for using k8s is to calculate/monitor the energy consumption of each pod and its carbon emission. Also integrated the ml model to score the project proposals of the innovators.

- If you want to create the k8s cluster follow the below commands

```bash
minikube start
cd infra
kubectl apply -f app-deploy.yaml
kubectl get pods
```

## Monitoring

- Using the kepler to monitor the carbon emission of the application
- Setting up the grafana dashboard follow the instructions [here](https://sustainable-computing.io/installation/kepler/)
<img width="1470" alt="Screenshot 2024-05-12 at 11 35 14 AM" src="https://github.com/cnu1812/s2b2/assets/75531528/0ea86eca-d11c-4363-90ec-52f96353879a">

