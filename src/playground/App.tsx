import Modal from "./Modal";
import Tabs from "./Tabs";
import Disclosure from "./Disclosure";

export default function App() {
  return (
    <main>
      <h1>Accessibility Playground</h1>

      <section>
        <h2>Modal Dialog</h2>
        <Modal />
      </section>

      <section>
        <h2>Tabs</h2>
        <Tabs />
      </section>

      <section>
        <h2>Disclosure</h2>
        <Disclosure />
      </section>
    </main>
  );
}