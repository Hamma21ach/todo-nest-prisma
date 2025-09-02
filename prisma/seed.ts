import { PrismaClient, Priority } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data
  await prisma.task.deleteMany();

  // Create sample tasks
  const tasks = [
    {
      title: 'Welcome to Todo App',
      description: 'This is your first task! Start organizing your life.',
      completed: false,
      priority: Priority.MEDIUM,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
    {
      title: 'Complete Project Setup',
      description: 'Finish setting up your development environment and dependencies.',
      completed: false,
      priority: Priority.HIGH,
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    },
    {
      title: 'Learn NestJS',
      description: 'Study the NestJS framework documentation and best practices.',
      completed: false,
      priority: Priority.HIGH,
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    },
    {
      title: 'Practice TypeScript',
      description: 'Work on TypeScript exercises and improve your skills.',
      completed: true,
      priority: Priority.LOW,
      dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      title: 'Plan Next Sprint',
      description: 'Review current progress and plan the next development sprint.',
      completed: false,
      priority: Priority.URGENT,
      dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    },
  ];

  for (const task of tasks) {
    await prisma.task.create({
      data: task,
    });
  }

  console.log(`✅ Successfully seeded ${tasks.length} tasks`);
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
