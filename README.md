#### Starting app project

Please copy contracts from .env.goerli to your .env project. You can find example under /.env.example.

For faster transaction confirmation, use atleast 600 gwei for transactions.

```
yarn install
```

And run command

```
yarn start
```

#### For testing the frontend

```
cp .env.example .env
```

```
yarn install
```

Remember to add Infura API key!!

```
yarn start
```

### Project structure

In the project structure inside chain directory we have the following parts:

```
|-app
	|- public/
	|- src/
		|- components/
		|- containers/
		|- interfaces/
		|- store/
			|- services/
			|- themeContext/

```
