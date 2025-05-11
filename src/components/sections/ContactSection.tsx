// import Image from "next/image";
import { contactSection } from "../../data/siteData";
import Heading from "../ui/Heading";
// import Button from "../ui/Button";
const ContactSection = () => {
  const { title, subtitle, description } = contactSection;
  return (
    <section className="container h-full my-20" id="contact">
      <Heading
        title={title}
        subtitle={subtitle}
        description={description}
        className="text-center"
      />
      {/* <div className="relative bg-primary/10 rounded-3xl p-12 my-12 flex flex-col md:flex-row justify-between items-center">
        <form className="w-full md:w-2/3">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="mt-1 block w-full py-2 px-3 border border-black rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="mt-1 block w-full py-2 px-3 border border-black rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="mt-1 block w-full py-2 px-3 border border-black rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary sm:text-sm"
              ></textarea>
            </div>
            <div>
              <Button text="Send Message" href="#" className="w-full md:w-64" />
            </div>
          </div>
        </form>
        <Image
          src={image}
          width={300}
          height={300}
          alt="Contact Illustration"
          className="hidden md:block absolute right-5"
        />
      </div> */}
    </section>
  );
};

export default ContactSection;
