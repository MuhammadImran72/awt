
const companyRouter = require("./api/company/company.router");
const companyServicesRouter = require("./api/company_services/company_services.router");
const newsRouter = require("./api/news/news.router");
const homeRouter = require("./api/home/home.router");
const mdRouter = require("./api/mdMessage/md.router");
const bodRouter = require("./api/bod/bod.router");
const aboutUSRouter = require("./api/aboutus/aboutus.router");
const galleryRouter = require("./api/gallery/gallery.router");
const serviceRouter = require("./api/service/service.router");
const partnerRouter = require("./api/partner/partner.router");
const userRouter = require("./api/user/user.router");



const routes = require("express").Router();
routes.use("/awt-api/company", companyRouter);
routes.use("/awt-api/company_service", companyServicesRouter);
routes.use("/awt-api/news", newsRouter);
routes.use("/awt-api/home", homeRouter);
routes.use("/awt-api/md", mdRouter);
routes.use("/awt-api/bod", bodRouter);
routes.use("/awt-api/aboutus", aboutUSRouter);
routes.use("/awt-api/gallery", galleryRouter);
routes.use("/awt-api/service", serviceRouter);
routes.use("/awt-api/partner", partnerRouter);
routes.use("/awt-api/user", userRouter);



module.exports = routes;