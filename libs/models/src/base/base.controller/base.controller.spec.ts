import { Test, TestingModule } from "@nestjs/testing";
import { BaseController } from "./base.controller";

const bookStub = {
  title: "TestTitle",
};
let data: any;
const requestResponseAndNextFactory = (jest: any) => {
  return {
    req: {
      query: jest.fn().mockImplementation(() => Promise.resolve(data)),
      user: jest.fn().mockImplementation(() => Promise.resolve({})),
    },
    res: {
      status: jest.fn().mockImplementation((data) => {
        return {
          json: jest.fn().mockImplementation((data) => Promise.resolve(data)),
        };
      }),
    },
    next: jest.fn().mockImplementation((data) => Promise.resolve(data)),
  };
};

describe("BaseController Unit Tests", () => {
  let appController: BaseController;
  const { req, res, next } = requestResponseAndNextFactory(jest);

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BaseController],
      providers: [],
    }).compile();

    appController = app.get<BaseController>(BaseController);
  });
  afterEach(() => jest.clearAllMocks());

  describe("create", () => {
    it("should call the create method", async () => {
      const response = await appController.create(bookStub, req, res, next);
      expect(response).not.toEqual(null);
    });
  });

  describe("patch", () => {
    it("should call the patch method", async () => {
      const response = await appController.patch("1", bookStub, req, res, next);
      expect(response).not.toEqual(null);
    });
  });

  describe("update", () => {
    it("should call the update method", async () => {
      const response = await appController.update(
        "1",
        bookStub,
        req,
        res,
        next
      );

      expect(response).not.toEqual(null);
    });
  });
});
