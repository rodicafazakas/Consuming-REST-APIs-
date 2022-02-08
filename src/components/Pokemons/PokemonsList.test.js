import { render, screen } from "@testing-library/react";

import PokemonsList from "./PokemonsList";
import data from "../../data.json";

describe("Given a PokemonsList component", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  beforeEach(() =>
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    })
  );

  describe("When it makes a call to the API", () => {
    test("It renders a list of pokemons", () => {
      render(<PokemonsList />);
      expect(window.fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon"
      );
      expect(window.fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("When it renders a list of pokemons", () => {
    test("It renders a Bulbasaur", async () => {
      render(<PokemonsList />);
      const listItem = await screen.findByText("bulbasaur");
      expect(listItem).toBeInTheDocument();
    });
  });

  describe("When it renders the list of Pokemons", () => {
    test("The list has a length of 20", async () => {
      render(<PokemonsList />);
      const list = await screen.findByRole("list");
      expect(list.childElementCount).toBe(20);
    });
  });
});
