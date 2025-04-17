

export default function Contact() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-text p-2">
            <h1 className="text-4xl font-bold text-brand-text text-center">
                Contact
            </h1>
            <div className="mt-2 w-60 mx-auto bg-brand-primary text-white p-4 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold">Feel free to reach out!</h2>
                <form
                    action="https://formspree.io/f/your-form-id"
                    method="POST"
                    className="grid gap-2 mt-4"
                >
                    <input type="text" name="name" placeholder="Your Name" className="p-1 rounded-md border" required/>
                    <input type="email" name="email" placeholder="Your Email" className="p-1 rounded-md border"
                           required/>
                    <textarea name="message" placeholder="Your Message" rows={5} className="p-1 rounded-md border"
                              required></textarea>
                    <button type="submit"
                            className="bg-brand-accent text-white py-1 px-2 rounded-lg hover:bg-brand-accent-hover">
                        Send Message
                    </button>
                </form>
            </div>
            <p className="text-center mt-2 text-xl">Or contact me directly via <a className={"underline text-brand-accent"} href={"mailto:drewglasser@hotmail.com"}>e-mail.</a> </p>
        </main>
    )
}