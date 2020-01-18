const React = require("react");

class New extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <div
            style={{ margin: `20px`, display: `flex`, flexDirection: `column` }}
          >
            <h1>Create a new recipe!</h1>
            <div style={{ marginBottom: `10px` }}>
              {this.props.errorMessage}
            </div>

            <form action="/recipes" method="POST">
              <div style={{ paddingBottom: `10px` }}>
                <input type="text" placeholder="recipes title" name="title" />
              </div>
              
              <div style={{ paddingBottom: `10px` }}>
                <input type="text" placeholder="recipes ingredients" name="ingredients" />
              </div>
              <div style={{ paddingBottom: `10px` }}>
                <input type="text" placeholder="recipes instructions" name="instructions" />
              </div>
              <div>
                <input
                  type="submit"
                  value="Create!"
                  style={{ borderRadius: `5px`, marginRight:`10px`}}
                />
                <button style={{ borderRadius: `5px` }}>
                  <a href="/">Go Home</a>
                </button>
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;
