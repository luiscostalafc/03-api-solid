import { describe, expect, it, beforeEach } from "vitest";

import { CreateGymUseCase } from "./create-gym";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gym-repository";

let gymRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe("Create Gym Use Case", () => {
  beforeEach(() => {
    gymRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymRepository);
  });

  it("should be able to register", async () => {
    const { gym } = await sut.execute({
      title: "Gym 1",
      description: "Só uma descrição",
      phone: "123466",
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
