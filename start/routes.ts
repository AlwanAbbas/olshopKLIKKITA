import router from '@adonisjs/core/services/router'

// Import controllers
const HomeController = () => import('#controllers/home_controller')
const AuthController = () => import('#controllers/auth_controller')
const AdminProductsController = () => import('#controllers/admin/products_controller')
// import AuthMiddleware from '#middleware/auth_middleware'

// ===================
// Public Routes
// ===================

router.get('/', [HomeController, 'index'])

router.get('/login', [AuthController, 'showLogin'])
router.post('/login', [AuthController, 'login'])

router.get('/register', [AuthController, 'showRegister'])
router.post('/register', [AuthController, 'storeRegister'])

// ===================
// Admin Routes
// ===================

// Admin routes (dilindungi)
router.group(() => {
  router.get('/admin/products', [AdminProductsController, 'index'])
  router.get('/admin/products/create', [AdminProductsController, 'create'])
  router.post('/admin/products', [AdminProductsController, 'store'])
  router.get('/admin/products/:id/edit', [AdminProductsController, 'edit'])
  router.put('/admin/products/:id', [AdminProductsController, 'update'])
  router.delete('/admin/products/:id', [AdminProductsController, 'destroy'])
})
// .middleware(['auth.user']) // pakai nama string sesuai yang didefinisikan di kernel

router.get('/contact', [() => import('#controllers/contacts_controller'), 'showForm'])
router.post('/contact', [() => import('#controllers/contacts_controller'), 'submitForm'])

router.get('/about', [() => import('#controllers/about_controller'), 'index'])
