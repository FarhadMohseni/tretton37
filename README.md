# About

This is another version of [tretton37's meet us page](https://tretton37.com/meet) with React and NextJS for SSR

As an extra, I made my own API and stored the data on a MongoDB database and the code available on the [API branch](https://github.com/FarhadMohseni/tretton37/tree/api) _(It has a lot to improve)_

You can see the project live on :

[https://tretton37-rho.vercel.app/](https://tretton37-rho.vercel.app/)

And here is the deployed version with my own API:

[https://tretton37api.vercel.app/](https://tretton37api.vercel.app/)

# Stories

- **Support for color blindness**

  _I think accessibility matters a lot, It's important to make sure most of the people with all sorts of conditions can use your website._

  _In the design process, I tried to use high-contrast colors and I double-checked that using [http://www.color-blindness.com/coblis-color-blindness-simulator/](Coblis color blindness simulator)_

- **Responsive design, works on
  mobile and tablets**

  _Responsiveness became a standard and personally, I can't ship a front-end that is not responsive_

- **Use modern CSS throughout
  the application**

  _I used CSS-grid, clamp, variables, clip-path, and appearance property_

- **Filter by name and office**

  _We have a lot of records and In my opinion, It was necessary to have filters for better user experince_

- **Only render a set of profiles
  using either infinity scroll,
  pagination or a load more
  button**

  _Again, We have a lot of records and it's more efficient to load them in chunks, I used infinity scroll for that_

- **Available on a free public URL**

  _I wanted this to be easily presentable, So I deployed that to Vercel_

- **Use Typescript**

  _Along with the great type safety features that it brings, I can validate my prop types without using an external library_

- **Integration tests of
  components**

  _Testing is a way to have cleaner code and ensure reliability and quality, Also it makes maintenance and deployment much more efficient (ex: in CI/CD pipeline)_

## Running the software

Installing the packages :

```bash
yarn install
#or
npm install
```

Running the development server:

```bash
npm run dev
```

The project will be accessible at [http://localhost:3000]() after running this command

Run this in order to run the integration test by cypress:

```bash
npm run cypress:open
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
