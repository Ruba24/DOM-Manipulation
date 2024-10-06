let currentReaction = null;
let hasReacted = false;
let likeCount = 0;

function toggleLike() {
    // If the user hasn't reacted yet, apply the default 'like' reaction
    if (!hasReacted) {
        setReaction('like');
    } else {
        // If already reacted, remove the reaction
        removeReaction();
    }

    updateLikeCount();
}

function setReaction(reaction) {
    const likeButton = document.getElementById("like-button");

    if (!hasReacted) {
        // First time reacting, increase the count
        likeCount++;
    }

    // Set the current reaction
    currentReaction = reaction;
    hasReacted = true;

    // Update the button text and style
    likeButton.textContent = getReactionEmoji(reaction) + " " + capitalizeFirstLetter(reaction);
    likeButton.classList.add("liked");

    updateLikeCount();
}

function removeReaction() {
    const likeButton = document.getElementById("like-button");

    // Reset to default state
    currentReaction = null;
    hasReacted = false;

    likeButton.textContent = "👍 Like";
    likeButton.classList.remove("liked");

    // Reduce the count if a reaction is being removed
    if (likeCount > 0) {
        likeCount--;
    }

    updateLikeCount();
}

function updateLikeCount() {
    const likeCountDisplay = document.getElementById("like-count");
    likeCountDisplay.textContent = likeCount;
}

function getReactionEmoji(reaction) {
    const reactions = {
        like: "👍",
        love: "❤️",
        haha: "😂",
        wow: "😮",
        sad: "😢",
        angry: "😡"
    };
    return reactions[reaction];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
