import supertest from 'supertest';
import app from '../../src/app.js';
import prisma from '../../src/database.js';

const agent = supertest(app);

describe('integration test', () => {
  beforeEach(async () => {
    await prisma.student.deleteMany();
  });

  it('should save a student', async () => {
    const students = { students: [{ name: 'juvelina' }] };
    const { status } = await agent.post('/students').send(students);
    expect(status).toBe(201);

    // side effect
    const savedStudent = await prisma.student.findFirst({
      where: {
        name: 'juvelina'
      }
    });

    expect(savedStudent).not.toBeNull();
  });
});
