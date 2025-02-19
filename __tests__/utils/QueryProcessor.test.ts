import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return your andrewID', () => {
        const query = "nmostafa";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your AndrewID."
          ));
    });

    test('should answer your name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Noor"
          ));
    });

    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 12, 90, 60?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "90"
          ));
    });
});