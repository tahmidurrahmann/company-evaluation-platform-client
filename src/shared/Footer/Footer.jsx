const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="text-neutral-content max-w-screen-2xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-start items-start py-10 gap-6">
                    <div className="flex-1">
                        <div className="flex gap-2">
                            <img className="w-[30px] md:w-[40px]" src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png" alt="" />
                            <h1 className="text-2xl md:text-4xl font-semibold">iONE</h1>
                        </div>
                        <p className="pt-6">International Orientation Native Evaluation is a comprehensive IT company evaluation platform. From project assessments to team performance reviews, our platform streamlines the evaluation process, making it easy for your organization to track progress and foster continuous improvement. We simplify the evaluation journey, empowering both HR and employees for enhanced efficiency and growth.</p>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className="flex-1  flex flex-col">
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className="flex-1  flex flex-col">
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className="pb-6">
                    <h3><p>©2024 iONE. All Rights Reserved</p></h3>
                </div>
            </footer>
        </div>
    );
};

export default Footer;