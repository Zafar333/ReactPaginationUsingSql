const { pool } = require("../Database/index.js");
exports.employee = async (req, res) => {
  const pool1 = await pool.connect();
  const { value } = req.params;
  let pageNumber = value || 1;
  let pageDataLimit = 30;
  let skip = (pageNumber - 1) * pageDataLimit;
  console.log("skip", skip);

  try {
    const countData = await pool1.query("select count(*) from employee");

    let totalPages = Math.ceil(countData.rows[0].count / pageDataLimit);

    let result = await pool1.query(
      "select * from employee offset $1 limit $2",
      [skip, pageDataLimit]
    );

    if (result.rows.length > 0) {
      res.json({ rawData: result, totalPages });
    }
  } catch (error) {
    res.status(404).json({ error, msg: "Server error" });
  } finally {
    pool1.release(true);
  }
};
