// Enzyme
import { shallow } from "enzyme";
// Layout
import { Footer } from "../../components/layout";

describe("Pruebas en componente <Footer />", () => {
  let wrapper = shallow(<Footer />);
  // Renderizado de componente
  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   Siguenos en
  test("la seccion follow us debe mostrar el siguiente texto: Siguenos en", () => {
    const followUs = wrapper.find("p").first().text();
    expect(followUs).toBe("Siguenos en");
  });
  //   Derechos reservados
  test("la seccion copyright debe mostrar leyenda de derechos reservados", () => {
    const copyright = wrapper.find("p").at(1).text();
    // Get Full Year
    const year = new Date().getFullYear();
    expect(copyright).toBe(
      `Copyright ${year} © MiAerolinea.com. Todos los derechos reservados.`
    );
  });
});
