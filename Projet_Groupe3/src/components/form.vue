<template>
    <div class="w-full max-w-md mx-auto">
      <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
            Prénom
          </label>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Entrez votre prénom"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
            Nom
          </label>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Entrez votre nom"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
            Email
          </label>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Entrez votre adresse email"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="message">
            Message
          </label>
          <textarea
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Entrez votre message"
          ></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>

</template>