'use strict';
const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      email: 'jati.suryo@gmail.com',
      password: hashPassword('12345'),
      role:'admin',
      address:"jl srikaya",
      phoneNumber:'086212341234',
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});

    let categories=require('../category.json')
    categories.forEach(el=>{
      delete el.id
      el.createdAt=new Date()
      el.updatedAt=new Date()
    })

    let items=require('../menu.json')
    items.forEach(el=>{
      delete el.id
      el.createdAt=new Date()
      el.updatedAt=new Date()
    })

    let ingredients=require('../ingredients.json')
    ingredients.forEach(el=>{
      delete el.id
    })
    
    await queryInterface.bulkInsert('Categories', categories, {});
    await queryInterface.bulkInsert('Items', items, {});
    await queryInterface.bulkInsert('Ingredients', ingredients, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
