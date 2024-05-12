import { Link, NavLink } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"  
import NavBar from "@/components/NavBar";


function HomePage() {
    return (
        <main className="relative min-h-screen flex flex-col overflow-hidden">
            <div class="circle"></div>
            <div class="circle"></div>
            <NavBar />
            <section className="flex flex-col items-center grow">
                <header className="py-12 text-center space-y-2">
                    <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text">Sustainability Squared, Behavior Balanced</h1>
                    <h3 className="text-sm">For tomorrow's cause</h3>
                    <h2>Connecting creators with investors</h2>
                </header>
                <div className="grid grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Innovators</CardTitle>
                            <CardDescription>Unleash Your Creativity for a Sustainable Future! Do you have a vision for a more sustainable world? We want to hear from you! Join us in our mission to cultivate innovative solutions for a greener tomorrow by sharing your ideas for sustainability.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button 
                                asChild
                                className="bg-emerald-500 hover:bg-slate-50 hover:text-slate-900 hover:border hover:border-slate-100"
                            >
                                <Link
                                    to="/projects/submit"
                                >
                                        Submit Project
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Investors</CardTitle>
                            <CardDescription><li>Invest in a Greener Future Today!</li><li>Are you ready to be a catalyst for change?</li><li>Seize the opportunity to invest in groundbreaking ideas</li><li>that have the power to transform our world for the better.</li></CardDescription>
                            <CardDescription>Join us in supporting visionary innovators who are leading the charge towards sustainability.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button 
                                    asChild
                                    className="bg-sky-500 hover:bg-slate-50 hover:text-slate-900 hover:border hover:border-slate-100"
                                >
                                    <Link
                                    to="/projects"
                                >
                                        Browse Projects
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </section>
        </main>
    );
}

export default HomePage;
