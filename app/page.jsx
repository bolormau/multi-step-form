import { Container } from './components/Container';
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col place-content-center items-center">
      <Main/>
    </div>
  );
}
