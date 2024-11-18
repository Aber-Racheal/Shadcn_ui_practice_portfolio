import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa";


export default function Contacts() {
    return (

        <div id="contacts" className="bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] w-screen fixed h-screen text-white">
            <h1 className="text-[60px] md:text-[80px] lg:text-[60px] font-bold text-center tracking-wider z-10 relative animate__animated animate__fadeIn mt-[90px] mr-[20%]">I'm only a call away!</h1>
            <div className="ml-[120px] mt-[100px]">
                <Tabs defaultValue="linkendin" className="w-[699px] bg-[#0C7075] ml-[100px] h-[250px] shadow-xl rounded-lg">
                    <TabsList className="gap-[50px] bg-[#294D61] rounded-t-lg">
                        <TabsTrigger value="linkendin" className="bg-[#294D61] text-white gap-[10px]" >    <FaLinkedin size={20} /> LinkendIn</TabsTrigger>
                        <TabsTrigger value="github" className="bg-[#294D61] text-white gap-[10px]">   <FaGithub size={20} /> GitHub</TabsTrigger>
                        <TabsTrigger value="email" className="bg-[#294D61] text-white gap-[10px]"> <FaEnvelope size={20} /> Email</TabsTrigger>
                        <TabsTrigger value="phone" className="bg-[#294D61] text-white gap-[10px]">   <FaPhone size={20} /> Phone</TabsTrigger>
                        <TabsTrigger value="twitter" className="bg-[#294D61] text-white gap-[10px]"> <FaTwitter size={20} /> Twitter</TabsTrigger>
                    </TabsList>

                    <TabsContent value="linkendin" className="p-[10px] text-justify">
                        <h3 className="text-center">Let's connect on LinkendIn!</h3>
                        <p>I'm always open to connecting with professionals in the industry and expanding my network. Feel free to send me a message or connect with me!</p>
                        <a
                            className="italic hover:text-blue-700 font-semibold"
                            href="https://www.linkedin.com/in/racheal-aber-665745278/">
                            Visit my LinkendIn profile
                        </a>
                    </TabsContent>

                    <TabsContent value="github" className="p-[10px] text-justify">
                        <h3 className="text-center">Checkout my GitHub Repositories!</h3>
                        <p>    I'm passionate about coding and open-source contributions. If you're curious about my projects, feel free to explore my GitHub profile where I share code and collaborate on various projects.</p>
                        <a
                            className="italic hover:text-blue-700 font-semibold"
                            href="https://github.com/Aber-Racheal">
                            Visit my GitHub profile
                        </a>
                    </TabsContent>

                    <TabsContent value="email" className="p-[10px] text-justify">
                        <h3 className="text-center">Get in touch via Email</h3>
                        <p> Whether you have a question, want to collaborate, or just want to say hi, feel free to send me an email! I'm quick to respond and always open to new opportunities.</p>
                        <a
                            className="italic hover:text-blue-700 font-semibold"
                            href="rachealaberr@gmail.com">
                            Send me an email
                        </a>
                    </TabsContent>

                    <TabsContent value="phone" className="p-[10px] text-justify">
                        <h3 className="text-center">Call Me or Text Me</h3>
                        <p>If you prefer a more direct conversation, don't hesitate to call or text me. I’ll be happy to chat or answer any questions you might have!</p>
                        <a
                            className="italic hover:text-blue-700 font-semibold"
                            href="+256787635823">
                            Call or text me at (+256) 787 635 823
                        </a>
                    </TabsContent>


                    <TabsContent value="twitter" className="p-[10px] text-justify">
                        <h3 className="text-center">Follow Me on Twitter</h3>
                        <p>I love sharing thoughts, tech updates, and random musings on Twitter. Follow me for the latest updates, and feel free to engage in conversations!</p>
                        <a
                            className="italic hover:text-blue-700 font-semibold"
                            href="https://x.com/Racheal6646701">
                            Follow me on Twitter
                        </a>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    )

}