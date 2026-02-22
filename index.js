import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const git = simpleGit();

async function pushToGithub() {
  try {
    // Stage all changes
    console.log("📝 Staging files...");
    await git.add(".");

    // Commit changes
    const commitMessage = `Update data - ${moment().format("YYYY-MM-DD HH:mm:ss")}`;
    console.log("📦 Committing changes...");
    await git.commit(commitMessage);

    // Push to remote
    console.log("🚀 Pushing to GitHub...");
    const result = await git.push();
    console.log("✅ Successfully pushed to GitHub!");
    console.log(result);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// Run the function
pushToGithub();

