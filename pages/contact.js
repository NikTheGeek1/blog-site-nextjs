import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me!</title>
        <meta
          name="description"
          contet="Send me your messages!"
        />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
